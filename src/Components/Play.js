const Play = () => {
    return  (
        // <div>I am testing</div>
        <div className="">
          <video 
          controls
           autoPlay>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag
          </video>
          </div>
       
    );
};
export default Play;