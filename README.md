    How can I explain this in terms that anybody can understand?
    What are the key points I'm trying to communicate?
    How can I shorten this explanation while still getting the point across?
    Would a person without technical knowledge be able to follow your thought process?

    # Bunny Money
    A cute little bank app for kids and parents, made with Svelte.js with TypeScript.

    ## Tech stuff
    I used firebase for the loggin in/register,
    firestore as a database. That's basically the backend. 

    The app requires that you log in (or register), and depending on wether you type in a name or not, logs you in as the parent (no name), or the (named) kid. 

    The parent can create or delete kids, and add or request money from each kid. They can also set an 'allowance' and the frequency for each checking account, and an 'interest rate' and frequency for the savings account. 

    The kids can collect their allowance/interest by loggin in, but if they don't log in for a while, it will accumulate. 

    ## TODO
    Make it responsive (currently only mobile)
    Add a 'forgot password' functionality
    Add more animations on kid's side