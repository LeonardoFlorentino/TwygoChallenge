export interface Course {
  id: number;
  created_at?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  urls: Url[];
}

interface Url {
  id: number;
  url: string;
}
