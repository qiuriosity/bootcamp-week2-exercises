# tables

## users
- id (uuid)
- name:
  - first name (string)
  - last name (string)
- birthday (date)
- password (string)
- bio (string)

## posts
- user id (uuid)
- id (uuid)
- text (string)
- date posted (date)
- time posted (time)
- number of likes (int)

## comments
- post id (uuid)
- user id (uuid)
- date posted (date)
- time posted (time)

## friends
- user 1 id (uuid)
- user 2 id (uuid)
- date requested (date)
- status (string? enum?)

# relationships

## users -> posts
- one user, many posts
- posts connected back to user via user id

## users -> users
- many to many relationship - users can have many friends
- users are connected via friends table (contains both user ids)

## comments
- we could also have a comments table for post comments (let's assume people can't reply to comments)
- one to many relationship between posts (one) and comments (many)
  - comments connect to posts via post id
- one to many relationship between users (one) and comments (many)
  - comments connect to users via user id