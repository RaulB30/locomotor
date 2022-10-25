export default function Slider(props) {
  return (
    <>
      <div className="main__container">
        <div className="text__testimonio">
          <h1>{props.texto}</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            facilis! Rem voluptate vel laborum modi, magnam illum corporis iure
            dolorem.
          </h2>
        </div>
        <img className="image_slider" src="./images/imagen2.jpg" />
      </div>

      <style jsx>
        {`
          .main__container {
            margin: 0 auto;
            display: grid;
            align-items: center;
            justify-content: space-between;
            grid-template-columns: repeat(2, max-content);
            width: 1200px;
            padding: 20px 0px;
          }
          .text__testimonio {
            width: 600px;
          }

          h2 {
            width: 50%;
            margin: 0 auto;
            padding: 0 0 0 0;
          }
          h1 {
            width: 50%;
            margin: 0 auto;
            padding: 0 0 0 0;
          }

          .image_slider {
            margin-top: 20px;
            width: 500px;
            height: 400px;
            border-radius: 30px;
            overflow: hidden;
            opacity: 1;
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
}
