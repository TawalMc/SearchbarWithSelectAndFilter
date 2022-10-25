import dummyData from "./data.json";

export type DummyDataType = {
    id: number,
    firstName: string,
    lastName?: string | null,
    email: string,
    userName: string,
    age: number,
    teams: {
        title: string,
        description: string
    },
    available?: boolean | null
}

export const DummyData: DummyDataType[] = dummyData;