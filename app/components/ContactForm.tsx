'use client';

interface ContactFormProps {
  productName?: string;
  showTitle?: boolean;
}

export default function ContactForm({ productName, showTitle = true }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to database later
    console.log('Form submitted');
    alert('Thank you for your inquiry. We will contact you soon!');
  };

  return (
    <div className="inquiry_box">
      <div id="etw_set_feedback_form">
        {showTitle && <div id="etw_form_title">Get in Touch</div>}
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>E-mail*</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Name*</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input type="tel" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label>WhatsApp</label>
              <input type="tel" className="form-control" />
            </div>
          </div>
          <div className="mb-3">
            <label>Message*</label>
            <textarea className="form-control" rows={5} required></textarea>
          </div>
          {productName && (
            <input type="hidden" name="product" value={productName} />
          )}
          <button type="submit" className="btn btn-primary w-100">Send</button>
        </form>
      </div>
    </div>
  );
}
