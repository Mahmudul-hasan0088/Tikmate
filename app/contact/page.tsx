"use client";
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Thank you for your message. We\'ll get back to you soon!')
        e.currentTarget.reset()
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-lg text-gray-600">
        Have a question or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="access_key" value="ab930cd8-4594-4c75-ba38-3a231f9ae1ea" />
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" id="email" name="email" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <Textarea id="message" name="message" rows={5} required className="mt-1" />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}

