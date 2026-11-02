import React from "react";
import Section from "./Section";

const fieldClass =
  "w-full p-4 rounded-xl bg-panel border border-line placeholder:text-soft focus:border-teal";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setResult("Sending...");
    const formData = new FormData(form);

    formData.append("access_key", "02c17852-fd17-48e7-b8e9-d460e9245c6d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent. I'll get back to you soon.");
        form.reset();
      } else {
        setResult(data.message);
      }
    } catch {
      setResult("Your message didn't send. Please email me instead.");
    }
  };

  return (
    <Section id="contact" label="Contact" title="Let's build something">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" type="text" aria-label="Your name" placeholder="Your name" required className={fieldClass} />
          <input name="email" type="email" aria-label="Your email" placeholder="Your email" required className={fieldClass} />
        </div>
        <textarea name="message" rows="6" aria-label="Your message" placeholder="Your message" required className={`${fieldClass} resize-none`}></textarea>
        <button type="submit" className="px-7 py-3 rounded-full bg-coral text-ink font-medium hover:bg-white transition-colors">
          Send message
        </button>
        <p role="status" className="text-sm text-soft">{result}</p>
      </form>
    </Section>
  );
};

export default Contact;
