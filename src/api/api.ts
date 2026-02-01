type ListResponse = {
  success: boolean;
  data: string[];
};

export async function EquityList(): Promise<ListResponse> {
  try {
    const response = await fetch("http://0.0.0.0:3000/allIndices");

    if (!response.ok) {
      throw new Error(`Request failed ${response.status}`);
    }

    const data: ListResponse = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data", error);
    throw error;
  }
}

  export async function OneDayEquityData(payload:string|null): Promise<any> {
    try{
      const response = await fetch(`http://0.0.0.0:3000/oneDayInsights?indexSymbol=${payload}`);
      console.log(payload)
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data", error);
      throw error;
    }

  }
