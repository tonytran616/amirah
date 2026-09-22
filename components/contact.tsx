'use client'

import { useState, type FormEvent } from 'react'
import { Reveal } from './reveal'

const fieldClass =
  'w-full rounded-lg border-0 bg-neutral-100 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 outline-none ring-neutral-900/10 focus:ring-2'
const labelClass = 'mb-2 block text-sm font-medium text-neutral-700'

const reasons = ['General enquiry', 'Request a demo', 'Partnership', 'Media']

function Required() {
  return <span className="text-red-500"> *</span>
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
            Contact us.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-neutral-600">
            Interested in our software or have a question? Send us a message and
            we&apos;ll get back to you shortly.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-600">
            You can reach us by filling out the form, or email us directly.
          </p>
        </Reveal>

        <Reveal delay={80}>
          {submitted ? (
            <div className="flex h-full min-h-56 flex-col items-start justify-center rounded-2xl bg-neutral-100 p-8">
              <h3 className="text-2xl font-medium tracking-tight">
                Thank you.
              </h3>
              <p className="mt-3 text-base text-neutral-600">
                Your message has been received. We&apos;ll get back to you
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                    <Required />
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                    <Required />
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                    <Required />
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="organization" className={labelClass}>
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className={labelClass}>
                  Reason
                  <Required />
                </label>
                <select
                  id="reason"
                  name="reason"
                  required
                  defaultValue=""
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select a reason
                  </option>
                  {reasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                  <Required />
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                Submit
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
