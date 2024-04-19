import Contact from './../components/ContactForm'
import HeadingOne from './../components/HeadingOne'

export default function contact() {
  return (
    // <article className="generic-content lg:max-w-[700px] min-h-screen mx-auto my-6">
    <article className="generic-content lg:max-w-[600px] min-h-screen mx-auto my-6">
      <HeadingOne texte="Contact" />
      <Contact />
    </article>
  )
}
