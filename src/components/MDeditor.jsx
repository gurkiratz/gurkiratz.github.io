import MDEditor, { selectWord } from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';
// import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";

const curDate = new Date();
const options = { month: 'long', day: 'numeric', year: 'numeric' };
const formattedDate = curDate.toLocaleDateString('en-US', options);
const defaults = {
  date: `> ${formattedDate}`,
  title: '# Title',
  content: 'content',
};

export default function Example() {
  const [date, setDate] = useState(defaults.date);
  const [title, setTitle] = useState(defaults.title);
  const [content, setContent] = useState(defaults.content);
  // const [mdxContent, setMdxContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('inputData'));

    if (savedData) {
      const {
        date = defaults.date,
        title = defaults.title,
        content = defaults.content,
      } = savedData;

      setDate(date);
      setTitle(title);
      setContent(content);
    }
  }, []);

  const handleSave = () => {
    const inputData = { date, title, content };

    localStorage.setItem('inputData', JSON.stringify(inputData));
    console.log(JSON.stringify(inputData));
  };

  const handlePublish = () => {
    setIsLoading(true);
    const inputData = { date, title, content };
    const updatedContent = `${inputData.date} \n${inputData.title}\n${inputData.content}`;
    const mdxContent = { title: inputData.title, content: updatedContent };

    axios
      .post('http://localhost:8000/create', { mdxContent })
      .then((response) => {
        setIsLoading(false);

        if (response.data.success) {
          toast.success(response.data.message);
          console.log(response.data.message);
          // Clear the mdxContent state after publishing
          setDate(defaults.date);
          setTitle(defaults.title);
          setContent(defaults.content);
          localStorage.clear();
        } else {
          toast.error(response.data.message);
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error('An error occurred while publishing the article.');
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div data-color-mode="light">
        <h3>Date</h3>
        <MDEditor height={100} value={defaults.date} onChange={setDate} />
        <h3>Title</h3>
        <MDEditor height={100} value={title} onChange={setTitle} />

        <h3>Content</h3>
        <MDEditor height={300} value={content} onChange={setContent} />
      </div>
      <button
        onClick={handleSave}
        className="border px-4 py-3 bg-emerald-600 text-white"
      >
        Save
      </button>
      <button
        onClick={handlePublish}
        className="border px-4 py-3 bg-blue-700 text-white"
      >
        Publish
      </button>
      {/* Loader component */}
      {isLoading && (
        // <div className="loader">
        //   <Loader type="Oval" color="#00BFFF" height={40} width={40} />
        // </div>
        <p>Publishing...</p>
      )}

      {/* Toast notifications container */}
      <ToastContainer />
    </div>
  );
}
