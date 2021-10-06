import { Section } from "~/interfaces";

export default function TabMateri({ sections }:{ sections: Section[] }) {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <h1>{section.title}</h1>
          {section.materials.map((materi)=>(
            <p key={materi.id}>{materi.title}</p>
          ))}
        </div>
      ))}
    </div>
  )
}