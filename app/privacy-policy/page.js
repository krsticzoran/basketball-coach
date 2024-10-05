import classes from '@/styles/pages/privacy-policy.module.scss'
import ContentReveal from '@/components/ui/content-reveal'

const PrivacyPolicy = () => {
  return (
    <main>
      <div className={classes.privacy}>
        <ContentReveal delay={0.5}>
          <h1>Privacy Policy</h1>

          <p>
            At <strong>Basketball Coach</strong>, we value your privacy and are
            committed to protecting your personal information. This privacy
            policy outlines how we collect, use, and protect the information you
            provide to us when you use our services.
          </p>
        </ContentReveal>
        <ContentReveal delay={0.5}>
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us, such as your
            name, email address, phone number, and any other information you
            choose to share when contacting us.
          </p>
        </ContentReveal>
        <ContentReveal delay={0.5}>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to your inquiries,
            improve our services, and keep you informed about our basketball
            coaching programs. We will not sell, distribute, or lease your
            personal information to third parties unless we have your permission
            or are required by law to do so.
          </p>
        </ContentReveal>
        <ContentReveal delay={0.5}>
          <h2>3. Data Security</h2>
          <p>
            We are committed to ensuring that your information is secure. We
            take appropriate measures to protect the personal information you
            provide from unauthorized access or disclosure.
          </p>
        </ContentReveal>
        <ContentReveal delay={0.5}>
          <h2>4. Contact Us</h2>
          <p>
            If you have any questions or concerns about this privacy policy,
            please feel free to contact us at{' '}
            <a href='mailto:savovicsinisa@gmail.com'>savovicsinisa@gmail.com</a>
            .
          </p>
        </ContentReveal>
      </div>
    </main>
  )
}

export default PrivacyPolicy
