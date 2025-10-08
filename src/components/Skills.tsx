const skillCategories = [
  {
    title: "Lenguajes de Programación",
    skills: ["Javascript", "Java"]
  },
  {
    title: "Bases de Datos",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Entornos de Ejecución",
    skills: ["NodeJS", "SpringBoot"]
  },
  {
    title: "Otros",
    skills: [
      "Git",
      "Windows y Linux",
      "API's REST",
      "Docker (familiarizado)",
      "TypeScript (familiarizado)"
    ]
  }
];

export const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
      <h2 className="text-2xl font-bold mb-8">Competencias</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-base font-semibold border-b border-border pb-2">
              {category.title}
            </h3>
            <ul className="space-y-1">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
