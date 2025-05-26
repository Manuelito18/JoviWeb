import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Contacto</h3>
          <p className="text-gray-600 mb-8">
            ¿Tienes preguntas sobre los libros o deseas más información? No dudes en contactarnos.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Envía un Mensaje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="contact-name">Nombre</Label>
                <Input id="contact-name" placeholder="Tu nombre" />
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="tu@email.com" />
              </div>
              <div>
                <Label htmlFor="contact-message">Mensaje</Label>
                <Textarea id="contact-message" placeholder="Tu mensaje..." rows={4} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enviar Mensaje</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
