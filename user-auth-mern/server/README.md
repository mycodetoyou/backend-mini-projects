### controllers/authcontrolers
##### steps to login function
1. login async function hona chahiye.
2. email aur password req.body se destructure karo.
3. database me **email** user ke details chake karo ``` const user = await User.findOne({ email })```
4. if user nahi hai to res send karo.
5. password match karo ```await bcrypt.compare(password, user.password);```
6. if ismatch false hai to res send karo.
7. token generate karo.
8. ok res send karo.