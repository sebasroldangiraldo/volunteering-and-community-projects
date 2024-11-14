export interface ICreateProjectResponse {
    statusCode: number;
    message:    string;
    data:       Data;
}

export interface Data {
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    organizer:   Organizer;
    id:          number;
    isActive:    boolean;
}

export interface Organizer {
    id:    number;
    email: string;
    role:  string;
}