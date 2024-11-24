import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloribus nam enim labore soluta consequuntur repellendus dicta
            perspiciatis tempore ipsam dolore, deleniti quam tempora nesciunt
            assumenda iste harum impedit! Reiciendis.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
