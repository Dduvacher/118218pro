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

export type SocieteInfo = {
  success: boolean,
  result: {
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

    },
    financials: {

    },
    mark_infos: {

    },
    last_bodacc: {

    },
    actes: {
     date: string,
     type: string, 
    }[],
  },
};