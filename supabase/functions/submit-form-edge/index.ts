// Import necessary modules and functions
import { serve } from "https://deno.land/std/http/server.ts"; // Deno HTTP server module
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"; // Supabase client for interacting with the backend
import { corsHeaders } from "../cors.ts"; // Custom CORS headers

// Define Supabase URL and anonymous key for authentication
const supabaseUrl = "https://tyvsesvasaebkcsletwf.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5dnNlc3Zhc2FlYmtjc2xldHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzMTE4NTgsImV4cCI6MjAwNTg4Nzg1OH0.2tTWYdNNMmymt_iRKtuz38DrlYFAAYzQm1Z2sx9eVdA";

// Create a Supabase client instance with the URL and key
const supabase = createClient(supabaseUrl, supabaseAnonKey);
//TODO: persistStorge needs to be added in future

// The main function that handles incoming HTTP requests
serve(async (req) => {
  if (req.method === "OPTIONS") {
    // Handle CORS preflight request by returning a simple "ok" response
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Parse the incoming JSON data from the request body
    const {
      applicant,
      firstName,
      lastName,
      emailAddress,
      DOB,
      gender,
      phone,
      streetAddress,
      country,
      zipCode,
      city,
      state,
      raceOption,
    } = await req.json();

    const createdAt = new Date(); // Get the current date and time

    // Insert the form data into the "registrants" table in Supabase
    const { data, error } = await supabase.from("registrants").insert([
      {
        applicant,
        first_name: firstName,
        last_name: lastName,
        email: emailAddress,
        dob: DOB,
        gender,
        address: streetAddress,
        phone,
        zip: zipCode,
        country,
        city,
        state,
        race: raceOption,
        created_at: createdAt,
      },
    ]);

    if (error) {
      // If there is an error during the insertion, throw an error
      throw new Error("Error inserting data into Supabase:", error);
    } else {
      console.log("Form data inserted into Supabase:", data);
    }

    // Return a success message
    const responseData = {
      message: "Form submitted successfully!",
    };

    return new Response(JSON.stringify(responseData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error submitting form:", error);

    // If there is an error during form submission, return an error message
    const responseData = {
      error: "Error submitting form",
    };

    return new Response(JSON.stringify(responseData), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
