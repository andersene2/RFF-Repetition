# RFF-Repetition
Repetition of online Form.
Process of creating the project.

1.) Create a repository in Github. Keep "gitignore = None". 

2.) Click "Set up in Desktop". This should open GitHub Desktop. 

3.) Keep "Repository URL" the same.

4.) Local Path allows you to place the new folder where you would like to.

5.) Once you made the new folder and pressed "clone". Open VS Code with a new window open.

6.) Click "Open Folder". Find the folder you created from Desktop and open it.

7.) Now that you opened the project folder. Open the VS terminal. Make sure you are using command 
    prompt and not powershell.

8.) In the terminal, type "npm create vite@latest ./". This creates a folder that can use React 
    inside the folder you have open. 

9.) Confirm or change package name to your liking.

10.) Confirm "React" in the dropdown inside the terminal.

11.) After entering React, another dropdown will appear in the terminal, enter "JavaScript".

12.) Once that is done you next command in the terminal should be "npm install". 

13.) Once that finishes, type another command in the terminal, "npm run dev". This opens a tab 
        in your web browser for your local host which shows you the page you are working on.

14.) For my project, I learned that I shouldn't care too much about how it looks and focus on getting 
        the basics of the form done first. This would include main variables, functions, or inputs. Once
        that is done then you can make it look pretty.

15.) Once you get the main basics done, this would be a good time to open Supabase (https://supabase.com/).

16.) Once you sign into supabase you should go into the dashboard (https://supabase.com/dashboard/projects#).
        Then click new project, make an organization, (name isn't crazy important, although this is not the 
        name of your project.)

17.) After you make and choose the organization it will give you a form asking for the project name,
        the database password, your region, and pricing plan (I mainly always do the free one). Once
            you finish the form click the green button "create new project".

18.) On the left side of the tab you will see a lot of icons, click on the one labeled "Table Editor".
        Once in click "new table". Give it a name and a description. You can add you columns now or later
            not a huge deal.

19.) After making a table go into the project settings. Then click on "API". You now have the API Settings 
        open, now go back into VS Code. Create two files. One labeled ".env" outside of the folders basic 
        folders. Once you made the ".env" folder make sure to put ".env" in your ".gitignore" file as well,
        The other file is named "supabaseClient.js". I put this file in my "src" folder.

20.) In your ".env" file you are going to make two variables.
        VITE_SUPABASE_URL=( your url in API Settings. )
        VITE_SUPABASE_ANON_KEY= ( also found in API Settings. )

21.) In your "supabaseClient.js" file, the code you are going to use can be found in API Docs above the
        project settings icon. In the "introduction" page.
        The code below is the code I used:
        
        /* 
        import { createClient } from '@supabase/supabase-js'
        
        console.log({env: import.meta.env})
        
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        export const supabase = createClient(supabaseUrl, supabaseAnonKey)
        */

22.) After adding that code to your file, go back to your main "App.jsx" file and at the top add
        "import {supabase} from "./supabaseClient";

||  A co-worker of mine did this part so this may be a bit off || (check out https://formik.org/docs/overview for more)

23.) In your terminal, you are going to write the command, "npm install formik --save"
        Formik keeps track of your form's state and exposes it, plus it has reusable methods and 
        event handlers (handleChange, handleBlur, handleSubmit).
        Formik also uses a "name" or "id" attribute to figure out which field to update.

24.) Once you have installed formik, another command to install would be, "npm install yup --save".
        This istalls Yup and the validationSchema which transforms Yup's validation errors 
        into a better looking object, whose keys match values.

25.) At the top of the App.jsx file, we also have the two lines. "import {Formik, Form, Field, ErrorMessage} from "formik";
        The second line is, "import * as Yup from "yup";
        
26.) Formik gets rid of the use for states, so outside the form I made an object called "initialValues".
        This holds all of the values I will be using in the form for each input, setting them to a ("").

27.) I then made a file called "index.ts" where on line 43, sends the input of the values into the database made on                 Supabase. This is because in the database I made the columns of each input it should be recieving. 
        You can see that it goes:
            applicant,
            first_name: firstName,
            last_name: lastName,
            email: emailAddress,
            ect...
        The name of the columns will be first followed up by the value that will be taken by the form.   
        example - first_name (name of columns): firstName (name of value in form),

A quick note before 28 is that I know I keep saying "input" even though in my files I keep using a <Field /> tag, this is 
because with formik they more or less do the same thing, although I keep mine as <Field /> whenever I use formik.

28.) For each input/field you have, in the <label> tag, make sure you have an htmlFor attribute to tie it
        to a field for a value.
        example:
        <label htmlFor="applicant"> ... </label>
        <Field id="applicant" name="applicant" 
        />

29.) I have comments in my code in my App.jsx file that explain this part more, although you will want
        to have a "handleRequest" function as an async function that will start the process of sending 
        the users info to the database. This is also by used as an edge function.
        "User enters value -> clicks the button -> handleRequest is called -> handleRequest calls the edge function-
        via 'supabase.functions.invoke("submit-form-edge")...' -> edge function receives json data and turns that back
        into JS via "await req.json(); and then inserts the recieved values into the db via    
        'supabase.from("your_db_name").insert'

30.) Once your edge function looks similar to the one in my App.jsx file and has been modified to your project,
        you will run two more commands in the terminal. 
        The first command will be "npx supabase login"
            This command will give you a link in the terminal that leads you to supabase, what you need to do
                there is create an access token, copy it, and paste it into the insert spot for it.
                (Note that one you create the token copy don't copy the one that looks like 
                sbp*********2130, copy the one that shows the entire access token, should be in a huge green
                box when done creating. 
                Another note is that when placing/typing into the insert spot for the key, it is a password
                input so the terminal bar won't move, you just have to paste the token in then press enter.
                )
            Once that is done it should come up with another line in the terminal saying, "Finished Supabase Login"
            or something like that. Now you can move onto the next command.
        The second command is "npx supabase functions deploy submit-form-edge".
            This command updates and deploys the edge function now that you have created it/made changes to it.
            The terminal will now ask you to enter the "project ref". You can find that by going to your project
                settings and looking for the Reference ID. It should be in General.
            Once you have done that, it should say "Deployed Function 'submit-form-edge' on project 'your_project_ref'.
        Your edge function should now be deployed and connected to your form and Supabase db.
        
            

        



