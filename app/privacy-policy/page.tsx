import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-slate max-w-none">
                    <p className="lead text-xl text-slate-600 mb-8">
                        At WIPA Chemicals International, we take your privacy seriously. This policy describes how we collect, use, and handle your information.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                        <p className="text-slate-600 mb-4">
                            We collect information you provide directly to us when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li>Request a quote or technical data sheet</li>
                            <li>Contact us via email or phone</li>
                            <li>Sign up for our newsletter</li>
                            <li>Participate in surveys or promotions</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                        <p className="text-slate-600 mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process your requests and send related information</li>
                            <li>Send you technical updates, security alerts, and support messages</li>
                            <li>Respond to your comments, questions, and requests</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Sharing</h2>
                        <p className="text-slate-600">
                            We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
                        <p className="text-slate-600">
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                        <p className="text-slate-600">
                            If you have any questions about this Privacy Policy, please contact us at: <br />
                            <a href="mailto:info@wipa-chemicals.com" className="text-sky-600 hover:text-sky-700">info@wipa-chemicals.com</a>
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
