# RentRefi — A2P 10DLC SMS Compliance Context

> **Purpose:** This file gives Claude Code full context to implement SMS compliance pages and form updates on rentrefi.com. Everything needed for GHL A2P campaign approval is here.

---

## 1. What Needs to Be Built / Added to the Site

The following must exist on rentrefi.com before the A2P campaign can be submitted:

| Item | Status Needed | Notes |
|---|---|---|
| `/privacy-policy` page | Must be live | Full policy below |
| `/terms-of-service` page | Must be live | Full policy below |
| Pre-qual form SMS consent language | Must be visible on form | Exact copy below |
| SMS consent checkbox on form | Must be present | Cannot be pre-checked |
| Privacy Policy link in footer | Must be present | Link to `/privacy-policy` |
| Terms of Service link in footer | Must be present | Link to `/terms-of-service` |
| Business name + contact info visible on site | Must be present | RENTREFI, LLC + email/phone |

---

## 2. SMS Consent Language for the Pre-Qual Form

Add this **below the phone number field** and **above the submit button** on the pre-qualification calculator form:

```
[ ] By submitting this form, I agree to receive SMS text messages from RentRefi 
(RENTREFI, LLC) regarding my DSCR loan pre-qualification, including follow-up 
outreach, appointment reminders, and loan-related information. Message frequency 
varies. Message and data rates may apply. Reply STOP to opt out at any time. 
Reply HELP for help. View our Privacy Policy and Terms of Service.
```

**Implementation notes:**
- The checkbox must be **unchecked by default**
- "Privacy Policy" and "Terms of Service" should be hyperlinks to their respective pages
- This language must be visible without scrolling (above the fold relative to the submit button)
- Do not gate the form submission on this checkbox being checked. Make it optional but clearly disclosed.

---

## 3. Privacy Policy Page (`/privacy-policy`)

**Page title:** Privacy Policy
**Route:** `/privacy-policy`
**Last updated date:** Insert current date on publish

---

### PRIVACY POLICY

**Last Updated: [DATE]**

RENTREFI, LLC ("RentRefi," "we," "our," or "us") operates rentrefi.com and provides DSCR lending services to real estate investors. This Privacy Policy describes how we collect, use, and share information about you when you visit our website or interact with our services.

---

#### 1. Information We Collect

We collect information you provide directly to us, including:

- **Contact information:** name, email address, phone number, mailing address
- **Financial information:** property details, loan inquiry information, estimated rental income, property value
- **Communications:** messages you send us via form submissions, email, or SMS

We also collect certain information automatically when you visit our website, including IP address, browser type, pages visited, and referring URLs via cookies and similar tracking technologies.

---

#### 2. How We Use Your Information

We use the information we collect to:

- Respond to your loan pre-qualification inquiries
- Communicate with you about your application or loan options via email, phone, or SMS (if you have opted in)
- Send appointment reminders and follow-up messages related to your inquiry
- Improve our website and services
- Comply with applicable laws and regulations

---

#### 3. SMS Communications

If you provide your phone number and opt in to SMS communications on our pre-qualification form, you consent to receive text messages from RENTREFI, LLC at the phone number you provide. These messages may include:

- Speed-to-lead follow-up from our team
- Appointment reminders
- Educational information about DSCR lending

**Message frequency varies.** Message and data rates may apply.

**To opt out:** Reply **STOP** to any SMS message at any time. You will receive a one-time confirmation and no further messages will be sent.

**For help:** Reply **HELP** or contact us at info@rentrefi.com.

We do not sell, rent, or share your phone number or SMS opt-in data with third parties for their marketing purposes.

---

#### 4. Sharing of Information

We do not sell your personal information. We may share your information with:

- **Service providers** who assist us in operating our website and delivering our services (e.g., CRM platforms, SMS delivery providers), subject to confidentiality obligations
- **Legal and regulatory authorities** when required by law or to protect our legal rights

---

#### 5. Data Retention

We retain your information for as long as necessary to fulfill the purposes described in this policy, or as required by law. You may request deletion of your data by contacting us at the information below.

---

#### 6. Your Rights

Depending on your state of residence, you may have the right to:

- Access the personal information we hold about you
- Request correction or deletion of your information
- Opt out of SMS communications at any time by replying STOP

To exercise any of these rights, contact us at info@rentrefi.com.

---

#### 7. Cookies

Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser.

---

#### 8. Children's Privacy

Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.

---

#### 9. Changes to This Policy

We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last Updated" date.

---

#### 10. Contact Us

If you have questions about this Privacy Policy or our data practices, contact us:

**RENTREFI, LLC**
Email: info@rentrefi.com
Website: rentrefi.com

---

## 4. Terms of Service Page (`/terms-of-service`)

**Page title:** Terms of Service
**Route:** `/terms-of-service`
**Last updated date:** Insert current date on publish

---

### TERMS OF SERVICE

**Last Updated: [DATE]**

These Terms of Service ("Terms") govern your use of the website located at rentrefi.com and any related services provided by RENTREFI, LLC ("RentRefi," "we," "our," or "us"). By accessing our website or submitting a pre-qualification form, you agree to these Terms.

---

#### 1. Use of Our Website

You agree to use rentrefi.com only for lawful purposes. You may not use our site to submit false or misleading information, attempt to gain unauthorized access to our systems, or interfere with the operation of our services.

---

#### 2. Pre-Qualification Forms

Submitting a pre-qualification form does not constitute a loan application or guarantee of financing. Pre-qualification inquiries are for informational purposes only. Actual loan terms are subject to underwriting, property eligibility, and lender approval.

---

#### 3. SMS Communications Consent

By checking the SMS consent checkbox on our pre-qualification form, you expressly consent to receive text messages from RENTREFI, LLC at the phone number you provide. These messages may be sent using automated technology.

- Message frequency varies based on your inquiry status.
- Message and data rates may apply.
- You may opt out at any time by replying **STOP**.
- Reply **HELP** for assistance or contact info@rentrefi.com.

Opting out of SMS will not affect your ability to receive other communications from us.

---

#### 4. No Legal or Financial Advice

Content on rentrefi.com is for informational purposes only and does not constitute legal, financial, or investment advice. Consult a qualified professional before making any financing or real estate investment decisions.

---

#### 5. Intellectual Property

All content on rentrefi.com, including text, graphics, logos, and design elements, is the property of RENTREFI, LLC and may not be reproduced without written permission.

---

#### 6. Disclaimer of Warranties

Our website and services are provided "as is" without warranties of any kind, express or implied. We do not guarantee the accuracy or completeness of any information on the site.

---

#### 7. Limitation of Liability

To the fullest extent permitted by law, RENTREFI, LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.

---

#### 8. Governing Law

These Terms are governed by the laws of the State of Missouri, without regard to its conflict of law principles.

---

#### 9. Changes to These Terms

We may update these Terms at any time. Continued use of our website after changes are posted constitutes acceptance of the updated Terms.

---

#### 10. Contact Us

**RENTREFI, LLC**
Email: info@rentrefi.com
Website: rentrefi.com

---

## 5. A2P Campaign Registration Field Values

Use these when completing the GHL A2P form:

### Campaign Details

| Field | Value |
|---|---|
| Campaign Use Case | Low Volume Mixed |
| Use Case Description | RENTREFI, LLC delivers SMS follow-up messages to real estate investors who have submitted a DSCR loan pre-qualification form on rentrefi.com. Messages include speed-to-lead outreach, appointment reminders, and educational loan information. All recipients have opted in via a web form with explicit SMS consent. |
| Sample Message #1 | Hi {firstName}, this is Shelby with RentRefi. I just reviewed your pre-qual and your deal looks solid. When's a good time for a quick 10-min call? Reply STOP to opt out. |
| Sample Message #2 | Hey {firstName}, just following up on your DSCR pre-qual from yesterday. Happy to connect whenever works for you. - Shelby, RentRefi | Reply STOP to unsubscribe. |
| Embedded Link | Checked |
| Phone Number | Checked |
| Age Gated Content | Unchecked |
| Financial Services / Loan | Checked |

### User Consent

| Field | Value |
|---|---|
| Opt-In Method | Website Form |
| Opt-in Form URL | https://rentrefi.com (or specific pre-qual page URL) |
| How do Contacts Opt-In | Contacts opt in by submitting the DSCR loan pre-qualification form on rentrefi.com. The form includes an explicit SMS consent checkbox stating that by submitting, they agree to receive text messages from RentRefi regarding their loan inquiry. Opt-out is available at any time by replying STOP. |
| Opt-in Message | Hi {firstName}, thanks for submitting your RentRefi pre-qual! You'll receive occasional follow-up texts from Shelby about your DSCR loan. Msg & data rates may apply. Reply STOP to opt out, HELP for help. |

---

## 6. Implementation Checklist

```
[ ] Create /privacy-policy page using content from Section 3
[ ] Create /terms-of-service page using content from Section 4
[ ] Add Privacy Policy and Terms of Service links to footer (sitewide)
[ ] Add SMS consent checkbox + disclosure text to hero form (Section 2)
[ ] Ensure checkbox is unchecked by default
[ ] Link "Privacy Policy" and "Terms of Service" in consent copy to their pages
[ ] Verify RENTREFI, LLC name and contact info visible on site
[ ] Fix hero form webhook (form submits but nothing arrives in GHL)
[ ] Confirm rentrefi.com is publicly accessible before A2P submission
```
