import ContactTitle from "@/components/contact/contactTitle";
import EmailForm from "@/components/contact/emailForm";

export default function ContactPage() {
    return (
        <section className="flex flex-col items-center">
            <ContactTitle />
            <EmailForm />
        </section>
    );
}
