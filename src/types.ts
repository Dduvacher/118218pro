type Person = {
  firstName: string,
  lastName: string,
  name: string,
  birth_date: string,
  role: string,
  role_start_date: string,
  company: boolean,
}

type Risk = {
  risk_level: number,
  collective_procedure_in_progress: boolean,
  collective_procedures: any[],
  legal_source_organization_statuses: {
    source_name: string,
    organization_status: string
  }[],
}

type Activity = {
  ape_code: string,
  ape_code_level1: string,
  ape_code_level2: string,
  ape_code_level3: string,
  ape_code_level4: string,
  ape_code_level5: string,
  ape_name: string,
  corporate_object: string,
}

type Legal = {
  name: string,
  code_level1: string,
  code_level2: string,
  code_level3: string,
  person_type: string,
  type: string,
}

type Address = {
  street: string,
  postal_code: string,
  city: string,
  country_code: string,
  country: string,
  lng: number,
  lat: number,
}

type Organization = {
  status: string,
  risk: Risk,
  creation_date: string,
  capital: string,
  registration_number: string,
  full_registration_number: string,
  vat_number: string,
  greffe_name: string,
  name: string,
  activity: Activity,
  legal: Legal,
  address: Address,
  last_legal_update_date: string,
  establishments_count: number,
}

type Website = {
  domain: string,
  url: string,
  description: string,
  webmaster_email: string,
  webmaster_phone: string,
  techno_types: string[],
}

type Year = {
  year: string,
  sales: number,
  profit: number,
  closing_date: string,
}

export type SocieteInfo = {
  id: string,
  organization: Organization,
  contacts: {
    main_corporate_officier: Person,
    corporate_officiers: Person[],
    email: string,
    emails: {
      value: string,
      type: string,
    }[],
    phones: {
      value: string
    }[],
  },
  web_infos: {
    logo_url: string,
    website_url: string,
    websites: Website[],
    linkedin: {
      url: string,
    },
    twitter: {
      url: string,
    },
    facebook: {
      url: string,
    },
    wikipedia: {
      url: string,
    },
  },
  financials: {
    last_sales: number,
    last_profit: number,
    last_staff: number,
    years: Year[],
  },
  mark_infos: {
    classes: {
      number: string,
      description: string,
    }[],
    marks: {
      name: string,
      application_date: string,
    }[],
  },
  last_bodacc: {
    type: string,
    bodacc_type: string,
    parution_date: string,
    number: string,
    rcs_name: string,
    legal_name: string,
    legal_status: string,
    address: string,
    balance_sheet_close_date: string,
    balance_sheet_deposit_type: string,
  },
  actes: {
    date: string,
    type: string,
  }[],
};