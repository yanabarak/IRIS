<template>
  <div class="company-guidelines main-block-general col-12 p-3" id="company-guidelines">
    <h6>Company Guidelines</h6>
    <div class="columns-2">
      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="code-slash" class="icon-style"></b-icon>
          </div>
          Product Development
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Product">Design of a commercial product</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Development Workflow</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Code Standards</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Release Process</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Product Lifecycle</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              Minimum Viable Product (MVP) Criteria
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Feedback Collection</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Testing and QA</li>
          </ul>
        </div>
      </div>
      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="journal-text" class="icon-style"></b-icon>
          </div>
          Documentation Guidelines
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Browser_Extension">Browser Extension Development</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Web_Application">Web Application Development</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="API_Documentation">API Documentation</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="User_Documentation">User Documentation/Manuals</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Documentation_Standards">Documentation Standards</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="journal-text" class="icon-style"></b-icon>
          </div>
          Templates & Checklists
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="InternalTemplates">Internal Templates</router-link>
            </li>
            <!-- <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Web_Application">Release Checklist</router-link>
            </li> -->
            <!-- <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="API_Documentation">Bug Report Template</router-link>
            </li> -->
          </ul>
        </div>
      </div>


      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-123"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z"
              />
            </svg>
          </div>
          Versioning and Release Management
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Version_Naming">Version Naming</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Git_Workflow">Git Workflow</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Release_Strategy">Release Strategy</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Rollback_Plan">Rollback Plan</router-link>
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              <router-link to="Changelog_Guidelines">Changelog Guidelines</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="shield" class="icon-style"></b-icon>
          </div>
          Security
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">Secure Coding Practices</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Dependency Management</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Incident Response</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              Data Privacy and Compliance
            </li>
          </ul>
        </div>
      </div>

      <div class="block-type col-12">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="people" class="icon-style"></b-icon>
          </div>
          Team Collaboration
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              Communication Tools and Practices
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Onboarding Process</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              Meeting and Review Cadence
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
