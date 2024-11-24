import { useGlobalHook } from './fetchProjects'

const Projects = () => {
  const { projects, loading } = useGlobalHook()
  console.log(projects, loading)

  if (loading) {
    return (
      <section className="projects-center">
        <h2>Loading...</h2>
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((item) => {
          const { id, url, img, title } = item
          return (
            <a href={url} key={id} className="project">
              <h4>{title}</h4>
              <img src={img} alt={title} className="img" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
