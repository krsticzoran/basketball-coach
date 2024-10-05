import classes from '@/styles/pages/terms-of-service.module.scss'
import ContentReveal from '@/components/ui/content-reveal'

const TermsOfService = () => {
  return (
    <main>
      <div className={classes.terms}>
        <ContentReveal delay={0.5}>
          <h1>Terms of Service</h1>
          <p>
            Welcome to <strong>Basketball Coach</strong>. By using our website
            and services, you agree to comply with and be bound by the following
            terms and conditions. Please read these terms carefully.
          </p>
        </ContentReveal>

        <ContentReveal delay={0.5}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using our services, you accept and agree to be
            bound by these Terms of Service and our Privacy Policy. If you do
            not agree with any part of these terms, please do not use our
            services.
          </p>
        </ContentReveal>

        <ContentReveal delay={0.5}>
          <h2>2. Use of Services</h2>
          <p>
            Our services are provided for personal and non-commercial use. You
            agree not to use our services for any unlawful purpose or in any way
            that could damage, disable, or impair our website or interfere with
            any other user's experience.
          </p>
        </ContentReveal>

        <ContentReveal delay={0.5}>
          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of <strong>Basketball Coach</strong> or its
            content suppliers and is protected by copyright and other
            intellectual property laws. You may not reproduce, distribute, or
            create derivative works from any content without our express written
            permission.
          </p>
        </ContentReveal>

        <ContentReveal delay={0.5}>
          <h2>4. Limitation of Liability</h2>
          <p>
            We are not liable for any damages arising from the use of our
            services, including but not limited to direct, indirect, incidental,
            punitive, or consequential damages.
          </p>
        </ContentReveal>

        <ContentReveal delay={0.5}>
          <h2>5. Changes to the Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Any changes
            will be effective immediately upon posting the revised terms on our
            website. Your continued use of the services after the posting of
            changes constitutes your acceptance of the modified terms.
          </p>
        </ContentReveal>

        <ContentReveal delay={0.5}>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms of Service,
            please contact us at{' '}
            <a href='mailto:savovicsinisa@gmail.com'>savovicsinisa@gmail.com</a>
            .
          </p>
        </ContentReveal>
      </div>
    </main>
  )
}

export default TermsOfService
