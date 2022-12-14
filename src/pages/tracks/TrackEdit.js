import React, { useEffect, useRef, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";

import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/FormPage.module.css";

const TrackEdit = () => {
  const [trackData, setTrackData] = useState({
    title: "",
    audio: "",
    image: "",
    content: "",
    status: "",
  });
  const { title, audio, image, content, status } = trackData;

  const history = useHistory();
  const imageInput = useRef(null);
  const { id } = useParams();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/tracks/${id}/`);
        const { title, audio, image, content, status, is_owner } = data;

        is_owner
          ? setTrackData({ title, audio, image, content, status })
          : history.push("/");
      } catch (err) {}
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setTrackData({
      ...trackData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("audio", audio);
    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }
    formData.append("content", content);
    formData.append("status", status);

    try {
      await axiosReq.put(`/tracks/${id}/`, formData);
      history.push(`/tracks/${id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div className={styles.FormContain}>
      <Form className={styles.Form} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className={styles.FormLabel}>Track Title</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.title?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label className={styles.FormLabel}>Audio Link</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="url"
            placeholder="Audio Link"
            name="audio"
            value={audio}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.audio?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label className={styles.FormLabel}>Image Upload</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="file"
            placeholder="Image"
            name="image"
            value={image}
            onChange={handleChange}
            ref={imageInput}
          />
        </Form.Group>
        {errors?.image?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label className={styles.FormLabel}>Track Info</Form.Label>
          <Form.Control
            className={styles.FormInput}
            type="text"
            placeholder="Track Info"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </Form.Group>
        {errors?.content?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group>
          <select
            name="status"
            id="status"
            value={status}
            onChange={handleChange}
          >
            <option value="draft">DRAFT</option>
            <option value="published">PUBLISHED</option>
          </select>
        </Form.Group>

        <div>
          <button type="submit" className={styles.FormBtn}>
            Save
          </button>
        </div>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}
      </Form>
    </div>
  );
};

export default TrackEdit;
