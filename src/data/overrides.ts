/**
 * LK Baltica — balticabylk.shop
 * LK BALTICA LIMITED, company no. 10649254, London.
 * SIC: 63990 other information service activities; 69102 solicitors;
 *      70229 management consultancy; 96090 other service activities.
 *
 * IMPORTANT: SIC 69102 (Solicitors) is on the register, but a SIC code is only
 * a classification — it is not an authorisation. Advertising legal services in
 * England and Wales requires authorisation by the SRA and a published
 * registration number. This site therefore does NOT offer legal services or
 * legal advice, and says so plainly. If the company is in fact SRA-authorised,
 * set site.legal.regulator and this copy must be rewritten by someone
 * qualified before any legal service is advertised.
 */

export const overrides: Record<string, unknown> = {
  home: {
    seo: {
      title: 'Information services and business consultancy, London',
      description:
        'LK Baltica Limited, registered in England and Wales (company no. 10649254). Information and research services, management consultancy and business administration support.',
    },
    hero: {
      eyebrow: 'Information services and consultancy, London',
      titleLead: 'Find out what is true',
      titleMark: 'before you decide',
      lead:
        'Most bad decisions are information problems first. We gather what is actually known about a question, set out what is not, and leave you with something you can act on rather than a document that hedges.',
      secondaryCta: 'What we do',
      visualLabel: 'On the register since 2017',
    },
    highlights: {
      eyebrow: 'How we work',
      title: 'What good information work looks like',
      subtitle: 'Four habits that separate research from a tidy-looking report.',
      items: [
        {
          icon: 'search',
          title: 'Sources you can follow',
          text: 'Every finding is traceable to where it came from, so you can check it rather than take it on trust.',
        },
        {
          icon: 'eye',
          title: 'The gaps named',
          text: 'What we could not establish is stated as clearly as what we could. A confident answer built on thin evidence is worse than no answer.',
        },
        {
          icon: 'bars',
          title: 'Short, and usable',
          text: 'A finding that takes forty pages to reach has usually not been understood. We write the conclusion first.',
        },
        {
          icon: 'shield',
          title: 'Clear about our limits',
          text: 'We do not provide legal advice. Where a question needs a solicitor, we say so and tell you what to ask them.',
        },
      ],
    },
    services: {
      eyebrow: 'What we do',
      title: 'Research, advice and support',
      subtitle: 'Four kinds of work, all of them about making a decision clearer.',
      moreLabel: 'All services',
      cardCta: 'Read more',
    },
    process: {
      eyebrow: 'The process',
      title: 'From question to decision',
      subtitle: 'Four steps, with the question itself taken seriously.',
      steps: [
        {
          title: 'Sharpen the question',
          text: 'Most enquiries arrive as a broad topic. We turn it into a question that has an answer, and agree it with you.',
        },
        {
          title: 'Agree the scope',
          text: 'What will be covered, what will not, how long it takes and what it costs, all in writing before any work starts.',
        },
        {
          title: 'Do the work',
          text: 'Research and analysis, with a note during rather than after if we find the question was the wrong one.',
        },
        {
          title: 'Hand it over properly',
          text: 'Findings, sources and the limits of what we established, in a form you can put in front of someone else.',
        },
      ],
    },
    record: {
      eyebrow: 'Company details',
      title: 'Who you are instructing',
      subtitle: 'Taken from the public register, so you can verify it independently.',
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Common questions',
      subtitle: 'Including the one about the register entry.',
      items: [
        {
          q: 'Your Companies House record lists solicitors. Do you provide legal services?',
          a: 'No. SIC code 69102 appears on the register as a classification, and a SIC code is not an authorisation to do anything. Legal services in England and Wales are reserved to firms authorised by the Solicitors Regulation Authority, and this company does not hold itself out as one. Nothing on this site is legal advice. Where your question needs a solicitor, we will say so and help you work out what to ask.',
        },
        {
          q: 'What does an information service actually produce?',
          a: 'Usually a short written answer to a specific question, with the sources behind it and an honest account of what could not be established. Sometimes it is a briefing before a meeting, or a review of material you already hold.',
        },
        {
          q: 'How is the work scoped and priced?',
          a: 'We agree the question, the boundaries and the time involved in writing before starting. If the work turns out to be larger than it looked, we stop and tell you rather than running up time quietly.',
        },
        {
          q: 'Will you tell me if the answer is unhelpful?',
          a: 'Yes, and that happens. Sometimes the evidence does not support the thing a client hoped it would. You get that answer in the same plain terms as any other, because an agreeable report that turns out to be wrong is the most expensive thing we could sell you.',
        },
        {
          q: 'How long has the company been registered?',
          a: 'Since 2 March 2017. The incorporation date, company number and registered office are all on the public register, and the link below takes you straight to the record.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'What do you need to find out?',
      lead: 'Describe the question in a line or two. We will tell you whether it is answerable and roughly what it takes.',
      secondaryCta: 'Company details',
    },
  },

  about: {
    seo: {
      title: 'About LK Baltica',
      description:
        'An information services and management consultancy company registered in England and Wales since 2017, based in London. Registered details as filed at Companies House.',
    },
    hero: {
      eyebrow: 'About',
      titleLead: 'Useful work',
      titleMark: 'ends in a decision',
      lead:
        'Research that does not change what somebody does was an expensive way of feeling prepared. We write towards the decision, not around it.',
    },
    story: {
      title: 'How we work',
      subtitle: 'The quality of an answer depends almost entirely on the question.',
      paragraphs: [
        'Enquiries usually arrive as a subject rather than a question. Turning a subject into something answerable is most of the work, and it is worth doing with the client in the room: it is common for the question someone arrives with to be a symptom of a different one.',
        'Once the question is agreed, the discipline is simple. Findings are tied to sources. What could not be established is written down as plainly as what could. And if the research undermines the direction a client was hoping to take, that goes in the first paragraph rather than a footnote.',
        'One limit is worth stating twice. This company does not provide legal services and nothing it writes is legal advice. Where a question turns on the law, the honest answer is to send you to someone authorised to give it, and to help you arrive with the right question.',
      ],
    },
    values: {
      title: 'What we hold to',
      items: [
        { icon: 'search', title: 'Traceable', text: 'Every finding tied to a source you can check yourself.' },
        { icon: 'eye', title: 'Honest about gaps', text: 'What we could not establish is stated, not smoothed over.' },
        { icon: 'compass', title: 'Decision-first', text: 'Written towards the choice you have to make.' },
        { icon: 'shield', title: 'Within our limits', text: 'No legal advice, and a clear word when you need a solicitor.' },
      ],
    },
    record: {
      eyebrow: 'Public record',
      title: 'Registered company details',
      subtitle: 'As filed at Companies House, including every SIC code on the record.',
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Got a question worth answering?',
      lead: 'Tell us what the decision is and we will tell you what would actually inform it.',
      secondaryCta: 'What we do',
    },
  },

  servicesPage: {
    seo: {
      title: 'Research, consultancy and business support services',
      description:
        'Information and research services, management consultancy, briefings and business administration support from LK Baltica Limited, London.',
    },
    hero: {
      eyebrow: 'Services',
      titleLead: 'Four kinds of work,',
      titleMark: 'one purpose',
      lead:
        'All of it exists to make a decision clearer. None of it is legal advice, and we will tell you when that is what you actually need.',
    },
    quoteNote:
      'Work is scoped and quoted against your specific question before it begins. Nothing on this page is a fixed price or a binding offer, and nothing here is legal advice.',
    cta: {
      eyebrow: 'Next step',
      title: 'Describe the question',
      lead: 'A line or two is enough for us to say whether it is answerable and what it would take.',
      secondaryCta: 'About the company',
    },
  },

  contact: {
    seo: {
      title: 'Contact LK Baltica',
      description:
        'Get in touch about research, consultancy or business support. Registered office: 97 Judd Street, London, WC1H 9JG. Company no. 10649254.',
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: 'Tell us the question,',
      titleMark: 'and the decision behind it',
      lead: 'Knowing what you have to decide tells us far more than knowing the topic.',
    },
    helpful: {
      title: 'Useful to include',
      items: [
        'The decision you are trying to make, not only the subject area.',
        'What you have already looked at, so we do not repeat it.',
        'When you need it by, and whether that date is fixed.',
        'Anything that would make an answer unusable, such as confidentiality limits.',
      ],
    },
    channelsTitle: 'How to reach us',
    recordTitle: 'Registered company details',
    cta: {
      eyebrow: 'Next step',
      title: 'Ready when you are',
      lead: 'Send the question over and we will tell you honestly whether we can help.',
      secondaryCta: 'What we do',
    },
  },

  services: [
    {
      id: 'research',
      icon: 'search',
      title: 'Information and research',
      summary: 'A specific question, researched properly, answered in writing with its sources.',
      points: [
        'The question agreed and written down before any work starts.',
        'Findings tied to sources you can follow up yourself.',
        'What could not be established stated as plainly as what could.',
        'A conclusion at the top, not buried on page thirty.',
      ],
    },
    {
      id: 'consultancy',
      icon: 'bars',
      title: 'Management consultancy',
      summary: 'Practical advice on how a business is run, within the limits of what we can actually know.',
      points: [
        'A scope agreed in writing, with the boundaries explicit.',
        'Recommendations you can act on inside a quarter.',
        'A clear separation between what we observed and what we infer.',
        'An honest word when the problem is outside what consultancy can fix.',
      ],
    },
    {
      id: 'briefings',
      icon: 'clipboard',
      title: 'Briefings and reviews',
      summary: 'Material you already hold, read properly and summarised before you have to use it.',
      points: [
        'A short briefing ahead of a meeting, negotiation or board paper.',
        'A review of documents you have, flagging what matters and what is missing.',
        'Plain language, with jargon translated rather than repeated.',
        'Written so you can hand it to someone else without explaining it.',
      ],
    },
    {
      id: 'business-support',
      icon: 'check-doc',
      title: 'Business administration support',
      summary: 'The recurring administrative work that gets squeezed out by everything else.',
      points: [
        'Document and records organisation, so things can be found later.',
        'Correspondence and process support on an agreed basis.',
        'Clear handover notes, so the work does not depend on us permanently.',
        'Confidentiality agreed in writing before anything is shared.',
      ],
    },
  ],
};
