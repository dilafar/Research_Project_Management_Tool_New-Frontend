import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";
import { storage } from "./Student/StudentSubFirebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import Swal from "sweetalert2";

import axios from "axios";

export default function Submissions() {
  const [upload, setUpload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const [submissionList, setSubmissionList] = useState([]);
  const [progress, setProgress] = useState(0);

 


  
  //Uploading a file to firebase
  const uploadFile = (file) => {
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setUpload(url);
        });
      }
    );
  };

  //capturing user entered file
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFile(file);
  };

  //adding submission
  const onFinish = async (values) => {
    values.submitURL = upload;
    console.log(values);
    try {
      const result = await axios.post("http://localhost:5000/studentsubmission/submissiontemplate", values);
      if (result) {
        Swal.fire(
          "Successful!",
          "Document Submitted",
          "success"
        );
        console.log("id sub", result.data);
        // fetchSubmissions(result.data);
        // window.location.reload(true);
      }
    } catch (e) {
      console.log("post group registration error ", e);
    }
    form.resetFields();
  };

  //Reset fields
  const onReset = () => {
    form.resetFields();
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };

  return (
    <div>
     

      <div >
        <center>
          <br />
          <h1>Template Submission</h1>
          <br />

          <form onSubmit={formHandler}>
            <input type="file" />
            <br />

            <button type="submit" >
              Upload
            </button>
          </form>
          <br />
          <h6>Uploaded {progress} %</h6>

          <br />

          <center>
            <div >
              {submissionList && (
                <a href={submissionList.submitURL}>
                  
                </a>
              )}
            </div>
          </center>
          <br />
          <br />
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
           
            <Form.Item name="submitURL" label="Submit URL" hidden="true">
              <Input />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="deadline"
              label="deadline"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <Button htmlType="button" onClick={onReset} >
                Reset
              </Button>
            </Form.Item>
          </Form>
          <br />
          <br />
        </center>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}