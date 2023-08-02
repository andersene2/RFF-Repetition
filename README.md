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

16.) Once you sign into supabase you should go into the dashboard. Then click new project, make an 
        organization, (name isn't crazy important, although this is not the name of your project.)

17.) After you make and choose the organization it will give you a form asking for the project name,
        the database password, your region, and pricing plan (I mainly always do the free one). Once
            you finish the form click the green button "create new project".

18.) On the left side of the tab you will see a lot of icons, click on the one labeled "Table Editor".
        Once in click "new table". Give it a name and a description. You can add you columns now or later
            not a huge deal.

19.) After making a table go into the project settings. Then click on "API". You now have the API Settings 
        open, now go back into VS Code. Create two files. One labeled ".env" outside of the folders basic 
        folders. The other file is named "supabaseClient.js". I put this file in my "src" folder.

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

22.) 


        

