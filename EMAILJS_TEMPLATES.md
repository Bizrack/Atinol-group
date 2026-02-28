# EmailJS template setup for T.A.G. Corp

Use these in your EmailJS dashboard so booking and contact form submissions are sent to **tagcorp@theatinolgroup.com**.

**Service ID:** `service_xqianpi`  
**Booking template ID:** `template_2n20upv`  
**Contact template ID:** `template_se1t35o`

In EmailJS: open each template → set **Content** to **HTML** → paste the full HTML below into the email body.

---

## 1. Booking template (template_2n20upv)

**Subject:**
```
Consultation request from {{from_name}}
```

**Body (paste into the template HTML content – same style as EmailJS default):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <!-- HEADER -->
  <div style="background-color: #1e3a5f; color: #ffffff; padding: 14px 18px; border-radius: 6px 6px 0 0; text-align: center">
    <div style="font-size: 18px; font-weight: bold; letter-spacing: 0.05em">T.A.G. CORP</div>
    <div style="font-size: 13px; margin-top: 4px; opacity: 0.95">Consultation request</div>
  </div>
  <!-- BODY -->
  <div style="padding: 18px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px">
    <div style="color: #64748b; margin-bottom: 16px">A consultation request from {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
    <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey">
      <table role="presentation">
        <tr>
          <td style="vertical-align: top; padding-right: 12px">
            <div style="padding: 6px 10px; background-color: #e0f2fe; border-radius: 5px; font-size: 26px" role="img">📋</div>
          </td>
          <td style="vertical-align: top">
            <div style="color: #2c3e50; font-size: 16px"><strong>{{from_name}}</strong></div>
            <div style="color: #64748b; font-size: 13px; margin-top: 2px">{{from_email}}</div>
            <div style="color: #64748b; font-size: 13px">Phone: {{phone}}</div>
            <p style="font-size: 15px; margin-top: 12px; line-height: 1.5; color: #0f172a">{{message}}</p>
          </td>
        </tr>
      </table>
    </div>
    <p style="margin-top: 16px; font-size: 13px; color: #64748b">Reply to this lead: <a href="mailto:{{reply_to}}" style="color: #0d9488; font-weight: 600">{{reply_to}}</a></p>
  </div>
  <!-- FOOTER -->
  <div style="margin-top: 16px; padding-top: 12px; border-top: 1px dashed lightgrey; text-align: center; color: #94a3b8; font-size: 11px">Sent from theatinolgroup.com · The Atinol Group Corp</div>
</div>
```

**Variables used:** `from_name` | `from_email` | `phone` | `message` | `reply_to`

---

## 2. Contact Us template (template_se1t35o)

**Subject:**
```
Contact form – {{from_name}}
```

**Body (paste into the template HTML content – same style as EmailJS default):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <!-- HEADER -->
  <div style="background-color: #1e3a5f; color: #ffffff; padding: 14px 18px; border-radius: 6px 6px 0 0; text-align: center">
    <div style="font-size: 18px; font-weight: bold; letter-spacing: 0.05em">T.A.G. CORP</div>
    <div style="font-size: 13px; margin-top: 4px; opacity: 0.95">Contact form message</div>
  </div>
  <!-- BODY -->
  <div style="padding: 18px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 6px 6px">
    <div style="color: #64748b; margin-bottom: 16px">A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
    <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey">
      <table role="presentation">
        <tr>
          <td style="vertical-align: top; padding-right: 12px">
            <div style="padding: 6px 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px" role="img">👤</div>
          </td>
          <td style="vertical-align: top">
            <div style="color: #2c3e50; font-size: 16px"><strong>{{from_name}}</strong></div>
            <div style="color: #cccccc; font-size: 13px">{{from_email}} · Phone: {{phone}}</div>
            <p style="font-size: 16px; margin-top: 12px; line-height: 1.5; color: #0f172a">{{message}}</p>
          </td>
        </tr>
      </table>
    </div>
    <p style="margin-top: 16px; font-size: 13px; color: #64748b">Reply: <a href="mailto:{{reply_to}}" style="color: #0d9488; font-weight: 600">{{reply_to}}</a></p>
  </div>
  <!-- FOOTER -->
  <div style="margin-top: 16px; padding-top: 12px; border-top: 1px dashed lightgrey; text-align: center; color: #94a3b8; font-size: 11px">Sent from theatinolgroup.com · The Atinol Group Corp</div>
</div>
```

**Variables used:** `from_name` | `from_email` | `phone` | `message` | `reply_to`

---

## 3. Environment variable

In your project root, create or edit `.env.local` and add your EmailJS **public key**:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Find the public key in EmailJS: Account → API Keys → Public Key.

Restart the dev server after adding the variable.
