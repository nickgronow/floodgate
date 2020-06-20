![Floodgate logo](images/header.png)

## Priorities

1. **Performance** - It needs to be fast.  Our Lighthouse score is 1/100 right now.  Should ideally be 90+.

![Lighthouse Score](images/lighthouse-score.jpg)

2. **Navigation** - We need all top-level links always accessible.  Currently critical links are hidden from view.

3. **Engagement** - People come to either learn about us (new visitors), or find out about upcoming events (new/existing members), or want to watch something (existing members).

4. **Feedback** - Ensure visitors have the ability to reach out to us about any topic.

## Content Structure

* Home
    * New to Floodate? - Static/CMS page
    * Upcoming events
        * No PCO api available
        * Could scrape: [PCO registrations](https://floodgate.churchcenter.com/registrations) couple times a day
* I'm New
    * TextInChurch Contact Card
    * About us - Static/CMS page
* About
    * Location - Static/CMS page
    * Contact Us - TextInChurch Contact Card?
* Events
    * List - [PCO registrations](https://floodgate.churchcenter.com/registrations)
    * Calendar? - Haven't found a strong use-case for this yet.
* Connect (ministries)
* Media
    * [Sermons](https://www.facebook.com/FloodGate/videos/)
    * Announcements
* Give
    * [Online form](https://floodgate.churchcenter.com/giving)
    * Text to give
* Watch

## Technologies

I am really considering the JAMStack for this new site.  Most of our site content is static, and the parts that are dynamic are fed from our 3rd party apis/embedded pages.  This would cater to performance tremendously.

## 3rd Party Apps

### Legend

* `W` - Website
* `E` - Events
* `S` - Service
* `C` - Communication

### Text In Church

* W Embedded Connect Card
* E Tablet Check-in
* S SMS Welcome follow up
* S Tablet Connect Card

## v1 Necessities

* Live streaming - restream
* Giving online
* Connect Cards
* Section - ministry pages
