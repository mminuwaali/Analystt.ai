export interface task {
  date: Date;
  message: string;
  status: 'pending' | 'success';
};

export interface state<T> {
  data: T;
  load: number;
  error: number;
};
