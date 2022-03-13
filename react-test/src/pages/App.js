import Axios from 'axios';

function App() {

  let title = ""
  let writer = ""
  let content = ""

  // onChange 방법 1
  const getTitle = e => {
    const {value} = e.target;
    title = value
    console.log(title)
  };

  // onChange 방법 2
  const getWriter = e => {
    writer = e.target.value
    console.log(e.target.value)
  };

  const getContent = e => {
    content = e.target.value
    console.log(content)
  };

  const submitReview = ()=>{
    if(title === ""  || writer === "" || content === "") {
      alert("빠진 내용이 있습니다. 모두 입력해 주십시오.")
      return
    }
    console.log("title", title)
    console.log("writer", writer)
    console.log("content", content)

    Axios.post('http://localhost:8000/api/insert', {
      title: title,
      writer : writer,
      content: content
    }).then(()=>{
      alert('등록 완료!');
      title = ""
      writer = ""
      content = ""
      document.querySelector(".title-input").value = ""
      document.querySelector(".title-writer").value = ""
      document.querySelector(".title-content").value = ""
    })
  };

  return (
    <div className="App">
      <h1>This is the Project for testing the React</h1>
      <div>
        <input className='title-input' type='text' placeholder='제목' onChange={getTitle} name='title' />
      </div>
      <div>
        <input className='title-writer' type='text' placeholder='작성자' onChange={getWriter}  name='writer' />
      </div>
      <div>
        <input className='title-content' type='text' placeholder='내용' onChange={getContent}  name='content' />
      </div>
      <div>
        <button className="submit-button" onClick={submitReview}>입력</button>
      </div>
    </div>
  );
}

export default App;
