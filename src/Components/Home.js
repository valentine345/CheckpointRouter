import Carousel from 'react-bootstrap/Carousel';
const Home=()=>{
    return(
        <div>
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://imgr.cineserie.com/2023/09/old_boy-park-chan-wook.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1'
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgr.cineserie.com/2023/10/films-d-horreur-massacre-%C3%A0-la-tron%C3%A7onneuse.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgr.cineserie.com/2023/10/expendables-4-1.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Home