test("GET to api/v1 should return 200", async () =>{
   
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);
    
    const responseBody = await response.json();

    expect(responseBody.update_at).toBeDefined();
    expect(responseBody.dependencies.database_version).toBeDefined();
    expect(responseBody.dependencies.database_version).toEqual("16.0");
    expect(responseBody.dependencies.max_connections).toBeDefined();
    expect(responseBody.dependencies.max_connections).toEqual(100);
    expect(responseBody.dependencies.active_connections).toBeDefined();
    expect(responseBody.dependencies.max_connections).toEqual(expect.any(Number));
    expect(responseBody.dependencies.active_connections).toEqual(expect.any(Number));
    expect(responseBody.dependencies.active_connections).toEqual(1);
    const parsedUpdateAt = new Date(responseBody.update_at).toISOString();
    expect(responseBody.update_at).toEqual(parsedUpdateAt);

})