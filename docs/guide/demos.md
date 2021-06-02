# Demos

## Creating an ASiC-E container
In this demo, we let the end user pick some files and when they click on the "Create ASiC-E container" button,
an ASiC-E container is created with those files included.

<CreatingAsiceContainer/>

### javascript
@[code{2-3} js](../.vuepress/components/CreatingAsiceContainer.vue)
@[code{6-33} js](../.vuepress/components/CreatingAsiceContainer.vue)

### html
@[code{50-58} html](../.vuepress/components/CreatingAsiceContainer.vue)


## Adding XAdES signatures to an existing container
In this demo, we let the end-user choose an ASiC-E container and manually enter the XAdES signatures.
(there are text inputs for only 2 signatures in this example to keep things simple, but you could as easily add
more signatures than that).



<AddingSignatureExistingContainer/>

## Full flow
