export interface Contact {
  id: string;
  name: string;
  nationality: string;
  natureOfRelationship: string;
  threat: string;
};

export const emptyContact = {
  id: '',
  name: '',
  nationality: '',
  natureOfRelationship: '',
  threat: ''
};
