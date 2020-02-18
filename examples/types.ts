// =====================================================================================================================
// ====================================================== boolean ======================================================
// =====================================================================================================================
const booleanValue_1: boolean = true;
const booleanValue_2: boolean = false;

// =====================================================================================================================
// ====================================================== number =======================================================
// =====================================================================================================================
const intValue: number = 8;
const floatValue: number = 1.3;
const num: number = 3e10;

// =====================================================================================================================
// ====================================================== string =======================================================
// =====================================================================================================================
const stringValue_1: string = 'Hello TypeScript.';
const stringValue_2: string = "Hello TypeScript.";

// =====================================================================================================================
// ====================================================== number =======================================================
// =====================================================================================================================
const numberArray_1: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberArray_2: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const stringArray_3: string[] = ['A', 'B', 'C', 'D', 'E'];
const stringArray_4: string[] = ["A", "B", "C", "D", "E"];
const stringArray_5: string[] = ["A", 'B', "C", 'D', "E"];

// =====================================================================================================================
// ======================================================= tuple =======================================================
// =====================================================================================================================
const tuple_1: [string, number] = ["A", 1];

// =====================================================================================================================
// ======================================================== any ========================================================
// =====================================================================================================================
let variable_1 = 42;
// some action ...
// variable_1 = 'new value';                                                                                // ERROR !!!

let variable_2: any = 42;
variable_2 = 'new value';                                                                               // Not ERROR !!!

// =====================================================================================================================
// ======================================================== type =======================================================
// =====================================================================================================================
type SomeType = string;
const value_1: SomeType = 'A';
// const value_2: SomeType = 1;                                                                             // ERROR !!!

type ID = string | number;
const id_1: ID = 1;
const id_2: ID = '1';
// const id_3: ID = true;                                                                                   // ERROR !!!

type ID2 = string | number | boolean;
const id_4: ID2 = 1;
const id_5: ID2 = '1';
const id_6: ID2 = true;

type SomeType2 = string | null | undefined;


