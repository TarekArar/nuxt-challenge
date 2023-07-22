export interface Email {
  id: Number;
  text: String;
  archived: Boolean;
}

export interface UIEmail extends Email {
  selected: Boolean;
  read: Boolean;
}
