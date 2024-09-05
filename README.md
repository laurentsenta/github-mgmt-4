# GitHub Management via Terraform

## What is it?
This repository is responsible for managing GitHub configuration of `filecoin-project` organisation as code with Terraform. It was created from [github-mgmt-template](https://github.com/protocol/github-mgmt-template) and it will receive updates from that repository.

**IMPORTANT**: Having write access to GitHub Management repository can be as powerful as having admin access to the organizations managed by that repository.

*NOTE*: Because we don't have merge queue functionality enabled for the repository yet, after a merge, wait for the `Apply` and `Update` workflows to complete before merging any other PRs.

To learn more, check out:
- [What is GitHub Management and how does it work?](docs/ABOUT.md)
- [How to set up GitHub Management?](docs/SETUP.md)
- [How to work with GitHub Management?](docs/HOWTOS.md)

## Tips / FYIs
* [github/filecoin-project.yml](https://github.com/filecoin-project/github-mgmt/blob/master/github/filecoin-project.yml) is the key file where updates are made to adjust permissions.
* "github-mgmt" was the old name.  The original template repo is now called "github-as-code".  We use the terms interchangably in comments/docs. 
* Yes, it's confusing to have a `.github` and `github` directory.  That is how gitub-mgmt was originally setup an we're living with it.  (At least of 2024-09-05, there is [no backlog item for cleaning this up](https://github.com/ipdxco/github-as-code/issues?page=1&q=is%3Aissue+is%3Aopen).)
* Not all [organization-level roles](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) are assignable through github-mgmt.  For example, organization moderators, billing managers, and ecurity managers need to set through the GitHub UI.
* github-mgmt calls [GitHub organization owners](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) as "admins" in [filecoin-project.yml](https://github.com/filecoin-project/github-mgmt/blob/master/github/filecoin-project.yml).  These terms are used interchangably in comments/docs.
