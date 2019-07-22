export interface Users {
  name :string;
  salary : number;
  designation : string;
  tasks ?: Task[];
}

export interface Task {
  name : string;
  desc : string;
}
