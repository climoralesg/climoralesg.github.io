const projects = [
  {
    title: "Auth-JWT",
    description: "Servicio desarrollado en NodeJS permite la autentificación de usuarios con contraseña encriptada a través libreria bcrypt a una base de datos MongoDB, utilizando como requisito previo un token de la libreria JWT",
    link: "https://github.com/climoralesg/jwt-auth",
    tech: ["NodeJS", "JWT", "MongoDB", "bcrypt"]
  },
  {
    title: "Consulta información meteorológica",
    description: "La aplicación creada con ReactJS permite consultar información meteorológica, como clima y temperatura, utilizando una API disponible de Open Weather.",
    link: "https://github.com/climoralesg/informacion-meteorologica",
    tech: ["ReactJS", "API", "Open Weather"]
  },
  {
    title: "División político-administrativa de Chile",
    description: "API desarrollada con NodeJS y MongoDB proporciona información sobre comunas, provincias y regiones de Chile.",
    link: "https://github.com/climoralesg/api-regiones-provincias-comunas-Chile",
    tech: ["NodeJS", "MongoDB", "REST API"]
  }
];

export const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
      <h2 className="text-2xl font-bold mb-8">Proyectos</h2>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                ver →
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
