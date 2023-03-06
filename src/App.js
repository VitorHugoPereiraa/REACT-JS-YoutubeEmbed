function App() {
  return (
    <div className="App">
      <div>
        <video
          id="vid1"
          className="video-js vjs-default-skin"
          controls
          autoPlay
          width="640"
          height="264"
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}] }'
        ></video>
      </div>
    </div>
  );
}

export default App;
