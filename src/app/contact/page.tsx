import Contact from './../components/ContactForm'
import HeadingOne from './../components/HeadingOne'

export default function contact() {
  return (
    <article className="lg:max-w-[600px] mx-auto my-6">
      <HeadingOne texte="Contact" />
      <Contact />
    </article>
  )
}
