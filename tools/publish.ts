const { cd, exec, echo, touch } = require("shelljs")
const { readFileSync } = require("fs")
const url = require("url")

const { GH_TOKEN } = process.env

const { repository } = JSON.parse(readFileSync("package.json") as any)

const { host = "", path = "" } = url.parse(repository.url)

echo("Deploying docs!!!")
cd("docs")
touch(".nojekyll")
exec("git init")
exec("git add .")
exec('git config user.name "mattmark"')
exec('git config user.email "matt.vandusen@float-left.co"')
exec('git commit -m "docs(docs): update gh-pages"')
exec(`git push --force --quiet "https://${GH_TOKEN}@${host}${path}" master:gh-pages`)
echo("Docs deployed!!")
