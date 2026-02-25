Use weather API: https://developer.foreca.com/#Forecasts. Note that this API is NOT public (for a deliberate complication, but you are free to use any public - there should be plenty). Your task is to create front-end for that API. Your application should not have any login buttons to authenticate against weather API. It should happen silently for the user. You need to create next parts (every page has a layout with a header, footer and navigation panel):
Main page with weather for the current location.
List page (may also be a flyout or any other kind of menu), where user can see the weather for all cities in the World (all available cities) sorted by country and city title.
Page with details about chosen (in a list from previous point) city.
Info page where user can see some information about the service.
Feedback page with a form for feedback on your site: please, create the form in survey style with some simple questions. Implement form submitting mechanism and save it in localStorage. For now don't bother yourself saving form data in DB.
Implement Dark/Light mode for your app. There should be some sort of switcher that changes current view.
